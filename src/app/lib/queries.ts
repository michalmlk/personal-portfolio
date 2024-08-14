export const HOME_QUERY = `
query HomePage {
    page(filter: {label: { eq: "Home" }}) {
        id,
        label,
        sections {
            __typename,
            ...on HeroSectionRecord {
                    id,
                    heroTitle,
                    heroImage {
                        url
                    }
                    heroSubtitle,
                    heroDescription
            }
            ...on TechStackSectionRecord {
              id,
              technologies {
                technologyName,
                technologyLogo {
                  url
                },
                pinned
              }
            }
        }
    }
}`;

export const PROJECTS_QUERY = `
    query ProjectsPage {
        page(filter: {label: { eq: "Projects"}}) {
          id,
          label,
          sections {
            __typename,
            ...on ProjectsSectionRecord {
              projectsList {
                title, 
                description,
                technologies,
                repositoryUrl
              }
            }
          }
        }   
}`;

export const FOOTER_QUERY = `
    query FooterComponent {
        component(filter: {name: { eq: "Footer"}}) {
            id,
            name,
            footer {
              copyrightText,
              socials {
                id,
                name,
                logo {
                  url
                },
                url
              }
            }
        }
    }
`;