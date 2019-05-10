export default {
  bind(el, binding) {
    if (el) {
      el.className = `${el.className} animated ${binding.value}`;
    }
  },
};
