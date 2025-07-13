Prism.languages.drift = {
  'comment': /\/\/.*/,
  'string': /"(?:\\.|[^\\"])*"/,
  'keyword': /\b(?:if|else|while|return|function|for|let|var|as)\b/,
  'number': /\b\d+(?:\.\d+)?\b/,
  'operator': /[+\-*\/=<>!.?]+/,
  'punctuation': /[{}[\];(),:]/,
  'identifier': /\b[a-zA-Z_][a-zA-Z0-9_]*\b/,
};