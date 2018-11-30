
const autocomplete = (input, dictionary) => dictionary.filter((word) => word.replace(/\W|\d/gi,"").match('^'+input.toLowerCase()));

autocomplete('app*le', ['airplane','airport','apple','ball', 'analagous', 'analogy', 'asymptotic', 'functional', 'fudge', 'burnout']);/*?*/