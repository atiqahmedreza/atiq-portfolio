export type Testimonial = {
  id: string;
  /** What they said. Keep it verbatim — do not paraphrase a reference into praise. */
  quote: string;
  /** Who said it. Use their real name, or omit the whole entry. */
  author: string;
  /** Their role and company, e.g. "Team Lead, Acme Ltd". */
  role: string;
  /** Optional link to the public source (LinkedIn recommendation, GitHub review, email you can show). */
  sourceUrl?: string;
  /** How you worked together, e.g. "Wanderly code review". */
  context?: string;
};

/**
 * Intentionally empty.
 *
 * The <Testimonials> section renders nothing while this array is empty, so the
 * page stays honest until there is something real to show. Add an entry only
 * when you have a quote you could stand behind if a recruiter asked the person
 * about it — a LinkedIn recommendation, a mentor's written feedback, or a
 * client email. Good first sources: your Programming Hero mentors, and anyone
 * who reviewed the Wanderly or Fable repositories.
 */
export const testimonials: Testimonial[] = [];
