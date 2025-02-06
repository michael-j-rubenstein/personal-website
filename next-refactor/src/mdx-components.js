import styles from "./mdx-components.module.css";

export function useMDXComponents(components) {
  return {
    h1: (props) => <h1 className={styles.h1} {...props} />,
    h2: (props) => <h2 className={styles.h2} {...props} />,
    h3: (props) => <h3 className={styles.h3} {...props} />,
    p: (props) => <p className={styles.p} {...props} />,
    a: (props) => <a className={styles.a} {...props} />,
    ul: (props) => <ul className={styles.ul} {...props} />,
    li: (props) => <li className={styles.li} {...props} />,
    code: (props) => <code className={styles.code} {...props} />,
    pre: (props) => <pre className={styles.pre} {...props} />,
    strong: (props) => <strong className={styles.strong} {...props} />,
    ...components,
  };
}
