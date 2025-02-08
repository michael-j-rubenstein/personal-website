import styles from "./mdx-components.module.css";

export function useMDXComponents(components) {
  return {
    h1: (props) => (
      <div className={styles.h1Container}>
        <h1 className={styles.h1} {...props} />
      </div>
    ),
    h2: (props) => (
      <div className={styles.container}>
        <h2 className={styles.h2} {...props} />
      </div>
    ),
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
    a: (props) => (
      <a
        className={styles.a}
        {...props}
        target="_blank"
        rel="noopener noreferrer"
      />
    ),
    ul: (props) => <ul className={styles.ul} {...props} />,
    li: (props) => <li className={styles.li} {...props} />,
    code: (props) => <code className={styles.code} {...props} />,
    pre: (props) => <pre className={styles.pre} {...props} />,
    strong: (props) => <strong className={styles.strong} {...props} />,
    ...components,
  };
}
