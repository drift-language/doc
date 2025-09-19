Prism.languages.drift = {
  'comment': /\/\/.*/,
  'string': /"(?:\\.|[^\\"])*"/,
  'keyword': /\b(?:if|else|while|return|fun|for|let|var|as|repeat|empty|class|enum|prefab|interface|static|public|protected|private|constructor|case|get|set|trigger|extend|with|implement|no|operator|subscript|override|final|throw|throws|catch|do|match|defer|async|await|concurrent|parallel|is|try|prefix|postfix)\b|\$super|\$this/,
  'number': /\b0b[0-9]+\b|\b0x[0-9a-fA-F]+\b|\b\d+\.\d+\b|\b\d+\b/,
  'operator': /[+\-*\/=<>!?@&|]+|\.{1,2}/,
  'punctuation': /[{}[\];(),:]/,
  'identifier': /\b[a-zA-Z_][a-zA-Z0-9_]*\b/,
};