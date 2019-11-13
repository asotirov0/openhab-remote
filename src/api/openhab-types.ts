
export interface Sitemap {
    name: string;
    label: string;
    link: string;
    homepage: Page;
}

export interface Page {
    id: string;
    title: string;
    icon?: string;
    link: string;
    parent?: Page;
    leaf: boolean;
    timeout: boolean;
    widgets: Widget[];
}

export interface Widget {
    widgetId: string;
    type: string;
    label: string;
    icon: string;
    mappings: Mapping[];
    linkedPage?: Page;
    item: Item;
    widgets: Widget[];
    switchSupport?: boolean;
    sendFrequency?: number;
}

export interface Item {
    link: string;
    state: string;
    editable: boolean;
    type: string;
    name: string;
    label: string;
    tags: string[];
    groupNames: string[];
    members: any[];
    groupType: string;
    function: Function;
    category: string;
}

export interface Function {
    name: string;
    params: string[];
}

export interface Mapping {
    command: string;
    label: string;
}