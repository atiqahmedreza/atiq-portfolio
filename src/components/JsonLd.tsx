import { siteConfig } from "@/data/site";
import { achievements } from "@/data/achievements";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";

/**
 * Person + ProfilePage structured data. This is what lets search engines show a
 * rich result when someone searches the name directly.
 */
export function JsonLd() {
  const personId = `${siteConfig.url}/#person`;

  const graph = [
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.url,
      email: `mailto:${siteConfig.email}`,
      telephone: siteConfig.phoneE164,
      image: `${siteConfig.url}${siteConfig.profileImage}`,
      jobTitle: "Full Stack Web Developer",
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rajshahi",
        addressCountry: "BD",
      },
      sameAs: [siteConfig.github, siteConfig.linkedin],
      knowsAbout: skillCategories.flatMap((c) => c.skills.map((s) => s.name)),
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Varendra University",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rajshahi",
          addressCountry: "BD",
        },
      },
      hasCredential: achievements.map((a) => ({
        "@type": "EducationalOccupationalCredential",
        name: `${a.title}${a.distinction ? ` (${a.distinction})` : ""}`,
        credentialCategory: "certificate",
        dateCreated: a.dateISO,
        identifier: a.credentialId,
        url: a.verifyUrl,
        recognizedBy: { "@type": "Organization", name: a.issuer },
      })),
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      mainEntity: { "@id": personId },
      inLanguage: "en",
    },
    ...projects.map((p) => ({
      "@type": "SoftwareSourceCode",
      name: p.name,
      description: p.summary,
      url: `${siteConfig.url}/projects/${p.slug}`,
      codeRepository: p.githubUrl,
      programmingLanguage: p.tags,
      author: { "@id": personId },
    })),
  ];

  return (
    <script
      type="application/ld+json"
      // Structured data is static and built from local data files only.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
