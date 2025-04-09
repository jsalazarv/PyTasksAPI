module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',    // Nueva característica
        'fix',     // Corrección de errores
        'docs',    // Documentación
        'style',   // Cambios de estilo (formato)
        'refactor',// Refactorización de código
        'test',    // Añadir o modificar tests
        'chore',   // Tareas de mantenimiento
        'perf',    // Mejoras de rendimiento
        'ci',      // Cambios en CI
        'build',   // Cambios que afectan el sistema de build
        'revert'   // Revertir cambios
      ]
    ],
    'type-case': [2, 'always', 'lower'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-case': [2, 'always', 'lower'],
    'header-max-length': [2, 'always', 72]
  }
};
