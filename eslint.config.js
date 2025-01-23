export default [
    {
      ignores: ["node_modules/**"], // İstenmeyen dosyaları hariç tutar
    },
    {
      files: ["**/*.js"], // JavaScript dosyalarını kontrol eder
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: {
        semi: ["error", "always"], // Noktalı virgül zorunlu
        quotes: ["error", "double"], // Çift tırnak zorunlu
        "no-unused-vars": "warn", // Kullanılmayan değişkenler için uyarı
        "no-console": "off", // Console kullanımına izin ver
      },
    },
  ];
  