const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const btn_flashsale = document.querySelector(".btn-save-flashsale");
const code_flashsale = document.querySelector(".codevalue");

btn.addEventListener("click", (e) => {
  coupon.select();
  coupon.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(coupon.value);
  btn.textContent = "คัดลอกคูปองแล้ว!";

  setTimeout(() => {
    btn.textContent = "คัดลอก";
  }, 3000);
  
});

