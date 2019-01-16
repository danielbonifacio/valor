module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "semi": ["error", "never"],
        "no-console": 0,
        "array-callback-return": 0,
        "linebreak-style": 0,
        "import/no-dynamic-require": 0,
        
        // tira o erro dos alias (ainda não tem suporte fora do webpack)
        "import/no-unresolved": 0,

        // tira o erro das variáveis globais
        "no-undef": 0,
    },
};