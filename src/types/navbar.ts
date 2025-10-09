export interface ContactButton {
    svgName: string;   // path to icon, e.g., contact/gitlab
    link: string;     // external URL
}

export interface ExternalLink {
    title: string;
    link?: string;     // external URL
}

export interface NavbarContent {
    title: string;
    contact_buttons: ContactButton[];
    external_links?: ExternalLink[];
}
