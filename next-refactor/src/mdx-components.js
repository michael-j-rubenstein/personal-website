import ModalContainer from "./components/MDX/ModalContainer";
import styles from "./mdx-components.module.css";

export function useMDXComponents(components) {
  return {
    h1: ({ children, ...props }) => {
      let title = children;
      let subtitle = "";

      if (typeof children === "string" && children.includes(" | ")) {
        [title, subtitle] = children.split(" | ");
      }

      return (
        <div className={styles.h1Container}>
          <h1 className={styles.h1} {...props}>
            {title}
          </h1>
          <p className={styles.h1Subtitle}>{subtitle}</p>
        </div>
      );
    },
    h2: (props) => {
      return (
        <div className={styles.container}>
          <h2
            className={`${styles.h2} ${
              props.id === "table-of-contents" && styles.h2Toc
            }`}
            {...props}
          />
        </div>
      );
    },
    h3: (props) => (
      <div className={styles.container}>
        <h3 className={styles.h3} {...props} />
      </div>
    ),
    p: (props) => (
      <div className={styles.container}>
        <p className={styles.p} {...props} />
      </div>
    ),
    a: (props) => {
      const isInternalLink =
        props.href.startsWith("#") || props.href.startsWith("/");

      return (
        <a
          className={styles.a}
          {...props}
          target={!isInternalLink ? "_blank" : ""}
          rel={!isInternalLink ? "noopener noreferrer" : ""}
        />
      );
    },
    ul: (props) => {
      return (
        <ModalContainer>
          <ul className={styles.ul} {...props} />
        </ModalContainer>
      );
    },
    li: (props) => <li className={styles.li} {...props} />,
    code: (props) => <code className={styles.code} {...props} />,
    pre: (props) => <pre className={styles.pre} {...props} />,
    strong: (props) => <strong className={styles.strong} {...props} />,
    ...components,
  };
}
