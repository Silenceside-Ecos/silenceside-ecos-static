"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { BookOpen, Clock, Users } from "lucide-react";
import { events, categoryStyles } from "@/lib/services/events";

function formatDate(date: Date): string {
  return date.toLocaleDateString("es-ES", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export function EventsCalendar() {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    undefined,
  );
  const [month, setMonth] = React.useState<Date>(new Date(2026, 4, 1));

  const eventDates = events.flatMap((event) =>
    event.sessions.map((s) => s.date.toDateString()),
  );

  const selectedEvents = selectedDate
    ? events.filter((event) =>
        event.sessions.some(
          (s) => s.date.toDateString() === selectedDate.toDateString(),
        ),
      )
    : events
        .filter((event) => event.sessions.some((s) => s.date >= new Date()))
        .slice(0, 4);

  return (
    <section id="events" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
            Reunirse
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] text-foreground uppercase text-balance">
            Próximos Eventos
          </h2>
          <p className="mt-6 max-w-2xl mx-auto font-sans text-lg text-muted-foreground leading-relaxed">
            Únete a nuestros encuentros sagrados y experiencias transformadoras.
            Cada evento está diseñado para guiarte más profundo en la
            arquitectura de tu silencio interior.
          </p>
        </div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16">
          {/* Calendar */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-card border border-border p-6 inline-block">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                month={month}
                onMonthChange={setMonth}
                className="!bg-transparent"
                modifiers={{
                  hasEvent: (date) => eventDates.includes(date.toDateString()),
                }}
                modifiersClassNames={{
                  hasEvent:
                    "!bg-primary/20 !text-primary font-medium relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-primary",
                }}
                classNames={{
                  months: "flex flex-col",
                  month: "space-y-4",
                  caption_label:
                    "font-serif text-lg tracking-[0.10em] uppercase",
                  nav: "flex items-center",
                  button_previous: "hover:bg-primary/10 hover:text-primary",
                  button_next: "hover:bg-primary/10 hover:text-primary",
                  weekday:
                    "font-serif text-xs tracking-wider text-muted-foreground flex-1 text-center",
                  day: "font-sans",
                  today: "!bg-secondary !text-secondary-foreground",
                }}
              />
              {selectedDate && (
                <button
                  onClick={() => setSelectedDate(undefined)}
                  className="mt-4 w-full text-center font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Ver todos los próximos eventos
                </button>
              )}
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase">
                {selectedDate ? formatDate(selectedDate) : "Próximos"}
              </h3>
              <span className="font-sans text-sm text-muted-foreground">
                {selectedEvents.length}{" "}
                {selectedEvents.length === 1 ? "evento" : "eventos"}
              </span>
            </div>

            {selectedEvents.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-border">
                <p className="font-sans text-muted-foreground">
                  No hay eventos programados para esta fecha.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {selectedEvents.map((event) => {
                  const activeSession = selectedDate
                    ? event.sessions.find(
                        (s) =>
                          s.date.toDateString() === selectedDate.toDateString(),
                      )
                    : undefined;

                  return (
                    <article
                      key={event.id}
                      className="group p-6 lg:p-8 bg-card border border-border hover:border-primary/30 transition-all duration-300"
                    >
                      {/* Badges */}
                      <div className="flex flex-wrap items-start gap-4 mb-4">
                        <span
                          className={cn(
                            "px-3 py-1 text-xs font-serif tracking-[0.15em] uppercase",
                            categoryStyles[event.category].className,
                          )}
                        >
                          {categoryStyles[event.category].label}
                        </span>
                        {event.spots && (
                          <span className="flex items-center gap-1.5 text-xs font-sans text-muted-foreground">
                            <Users size={12} />
                            {event.spots} plazas
                          </span>
                        )}
                      </div>

                      {/* Level / Series */}
                      {(event.level || event.series) && (
                        <div className="mb-2 space-y-0.5">
                          {event.level && (
                            <p className="text-xs font-sans text-muted-foreground uppercase tracking-wide">
                              {event.level}
                            </p>
                          )}
                          {event.series && (
                            <p className="text-xs font-sans text-primary/70 italic">
                              {event.series}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Title */}
                      <h4 className="font-serif text-xl lg:text-2xl tracking-[0.05em] text-foreground group-hover:text-primary transition-colors duration-300">
                        {event.title}
                      </h4>

                      <p className="mt-3 font-sans text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>

                      {/* Active session content or full session list */}
                      {activeSession ? (
                        <div className="mt-4 p-4 bg-primary/5 border-l-2 border-primary space-y-2">
                          <p className="text-sm font-medium text-foreground">
                            {activeSession.topic}
                          </p>
                          <ul className="space-y-1">
                            {activeSession.content.map((item, i) => (
                              <li
                                key={i}
                                className="flex gap-2 text-sm text-muted-foreground"
                              >
                                <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-primary/50" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <ul className="mt-4 space-y-2">
                          {event.sessions.map((session, i) => (
                            <li
                              key={i}
                              className="flex items-baseline gap-3 text-sm border-l-2 border-border pl-3"
                            >
                              <span className="shrink-0 font-medium text-foreground">
                                {session.date.toLocaleDateString("es-ES", {
                                  weekday: "short",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                              <span className="text-muted-foreground">
                                {session.topic}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Time / Location */}
                      <div className="mt-6 flex flex-wrap gap-6 text-sm font-sans text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Clock size={14} className="text-primary" />
                          {event.startTime} · {event.sessionDuration}
                        </span>
                        {event.location && (
                          <span className="flex items-center gap-2 text-primary font-medium">
                            {event.location}
                          </span>
                        )}
                      </div>

                      {/* Bibliography */}
                      {event.bibliography && (
                        <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                          <BookOpen
                            size={12}
                            className="mt-0.5 shrink-0 text-primary"
                          />
                          <span>{event.bibliography.join(" · ")}</span>
                        </div>
                      )}

                      {/* Footer */}
                      <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                        <a
                          href="#contact"
                          className="font-serif text-sm tracking-[0.15em] text-primary uppercase hover:text-accent transition-colors duration-300"
                        >
                          Reserva Tu Espacio
                        </a>
                        <span className="font-sans text-xs text-muted-foreground">
                          {activeSession
                            ? activeSession.date.toLocaleDateString("es-ES", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                            : `${event.sessions.length} encuentros`}
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
