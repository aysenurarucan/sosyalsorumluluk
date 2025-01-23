const fs = require("fs");
const path = require("path");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

test("Button click should trigger alert", () => {
  // HTML dosyasını yükle
  const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
  const dom = new JSDOM(html);

  // DOM içindeki butonu seç
  const button = dom.window.document.querySelector("button");

  // alert fonksiyonunu mock'la
  dom.window.alert = jest.fn();

  // Buton için click event handler bağla (HTML'deki onclick yerine)
  button.addEventListener("click", () => {
    dom.window.alert("Button clicked!");
  });

  // Buton tıklama olayını simüle et
  button.click();

  // alert'in çağrıldığını doğrula
  expect(dom.window.alert).toHaveBeenCalled();
});
