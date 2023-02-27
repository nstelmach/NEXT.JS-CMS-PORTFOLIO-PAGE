import { storyblokEditable } from "@storyblok/react";

export const createBlockComponentRenderer =
  (typeToBlockComponent) =>
  ({ content, ...restProps }) => {
    // check if component is defined above

    if (typeof typeToBlockComponent[content.component] !== undefined) {
      const Component = typeToBlockComponent[content.component];
      const props = content;

      return <Component {...props} {...restProps} />;
    }

    // fallback if the component doesn't exist
    return (
      <div className="w-full overflow-hidden">
        The component <strong>{content.component}</strong> has not been created
        yet.
        <pre>{JSON.stringify(content, null, 2)}</pre>
      </div>
    );
  };
