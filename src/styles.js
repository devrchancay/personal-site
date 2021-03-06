export const globalStyles = ` * {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  line-height: 1.25;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
a:not(a[href="mailto@*"]) {
  text-decoration: none;
  color: var(--color-primary) !important;
  font-weight: 700;
}
`;

export const blogPostStyles = `.BlogPost * {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  
  .BlogPost h1,
  h2,
  h3,
  h4 {
    font-family: Poppins;
    font-weight: bold;
    color: var(--color-primary);
  }
  
  .BlogPost p,
  a,
  pre,
  code {
    font-family: Sintony, serif;
    color: var(--color-secondary);
  }
  
  .BlogPost h1 {
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
  
  .BlogPost .date {
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    text-align: center;
    color: var(--color-secondary);
  }
  
  .BlogPost h3 + h4 {
    margin-top: 28px;
  }
  
  .BlogPost ul + h3 {
    margin-top: 28px;
  }
  
  .BlogPost ul + h4 {
    margin-top: 28px;
  }
  
  .BlogPost div + h3 {
    margin-top: 28px;
  }
  
  .BlogPost p + h3 {
    margin-top: 28px;
  }
  
  .BlogPost h3 {
    font-size: 30px;
    line-height: 1.15;
    letter-spacing: -0.015em;
  }
  
  .BlogPost p + h4 {
    margin-top: 28px;
  }
  
  .BlogPost h4 {
    font-size: 24px;
    line-height: 1.22;
    letter-spacing: -0.012em;
  }
  
  .BlogPost p {
    font-size: 18px;
    line-height: 1.58;
    letter-spacing: -0.004em;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  
  .BlogPost img {
    padding-top: 43px;
    display: inherit;
    margin: 0 auto;
  }
  
  .BlogPost figcaption {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.68);
    letter-spacing: 0;
  }
  
  .BlogPost figcaption + p {
    margin-top: 28px;
  }
  
  .BlogPost figcaption + h3 {
    margin-top: 28px;
  }
  
  .BlogPost a {
    color: var(--color-info);
    text-decoration: underline;
  }
  
  .BlogPost ul {
    margin-top: 29px;
  }
  
  .BlogPost li {
    --x-height-multiplier: 0.375;
    --baseline-multiplier: 0.17;
  
    letter-spacing: 0.01rem;
    font-weight: 400;
    font-style: normal;
    font-size: 21px;
    line-height: 1.58;
    letter-spacing: -0.003em;
    list-style: none;
    margin-left: 30px;
    margin-bottom: 14px;
    color: var(--color-secondary);
  }
  
  .BlogPost li:before {
    content: '-';
    color: var(--color-info);
    padding-top: 4px;
    padding-right: 15px;
    position: absolute;
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 78px;
    margin-left: -78px;
    text-align: right;
  }
  
  .BlogPost blockquote {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    border-left: 3px solid rgba(0, 0, 0, 0.84);
    padding-left: 20px;
    margin-left: -23px;
  }
  
  .BlogPost blockquote > blockquote {
    background: rgba(0, 0, 0, 0.05);
    font-style: italic;
    padding: 1rem;
    font-weight: 400;
    font-style: italic;
    font-size: 21px;
    line-height: 1.58;
    letter-spacing: -0.003em;
  }
  
  .blogList {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .blogList h3 {
    font-size: 24px;
  }
  
  .blogList h3 > a {
    color: rgb(55, 71, 79);
    text-decoration: none;
    font-weight: bold;
  }
  
  .blogList p {
    margin-top: 10px;
    word-break: break-word;
    font-size: 18.96px;
    line-height: 24px;
    fill: rgba(0, 0, 0, 0.54);
    letter-spacing: 0px;
  }
  
  .BlogPost h4 + .gatsby-highlight {
    margin-top: 8px;
  }
  
  .BlogPost code.language-text {
    background: #d6deeb;
    color: rebeccapurple;
    padding: 0.2rem;
  }
  
  .BlogPost .gatsby-highlight-code-line {
    display: block;
    background: rebeccapurple;
    min-width: 500px;
  }
  
  @media (min-width: 576px) {
    .BlogPost .gatsby-highlight-code-line {
      min-width: 860px;
    }
  }`;
