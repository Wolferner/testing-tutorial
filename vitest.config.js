export default {
	test: {
		environment: 'jsdom', // Использование эмуляции браузера
		globals: true, // Включает глобальные функции test, expect и т. д.
		setupFiles: './vitest.setup.js', // Файл для предварительной настройки
	},
	esbuild: {
		jsxInject: `import React from 'react'`, // Автоматический импорт React для JSX
	},
};
