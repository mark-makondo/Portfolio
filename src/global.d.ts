declare module "*.tsx" {
    const content: unknown;
    export default content;
}

declare module "*.jsx" {
    import React from "react";
    const Component: React.FC<unknown>;
    export default Component;
}
