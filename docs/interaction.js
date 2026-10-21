const search = document.querySelector('#skill-search');
const skills = [...document.querySelectorAll('.skill')];
search.addEventListener('input', () => {
  const query = search.value.trim().toLocaleLowerCase();
  let count = 0;
  skills.forEach(skill => {
    skill.hidden = !skill.textContent.toLocaleLowerCase().includes(query);
    if (!skill.hidden) count++;
  });
  document.querySelector('#skill-count').textContent = `${count} 个自制模块`;
  document.querySelector('#skill-empty').hidden = count !== 0;
});
let toastTimer;
function notify(message) {
  const toast = document.querySelector('.toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2600);
}
document.querySelector('#copy-install').addEventListener('click', async () => {
  const command = document.querySelector('.install code').textContent;
  try {
    await navigator.clipboard.writeText(command);
    notify('安装命令已复制');
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('.install code'));
    selection.removeAllRanges();
    selection.addRange(range);
    notify('请按 Ctrl / ⌘ + C 复制已选中的命令');
  }
});
document.querySelectorAll('.project-details').forEach(details => {
  details.addEventListener('toggle', () => {
    details.querySelector('summary span').textContent = details.open ? '收起档案 −' : '展开阅读 +';
  });
});
const links = [...document.querySelectorAll('nav a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href')));
let scheduled = false;
function updateNavigation() {
  let active = null;
  sections.forEach(section => {
    if (section.getBoundingClientRect().top <= window.innerHeight * .4) {
      if (!active || section.offsetTop > active.offsetTop) active = section;
    }
  });
  links.forEach(link => {
    const selected = active && link.hash === `#${active.id}`;
    link.classList.toggle('active', !!selected);
    if (selected) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
}, { passive: true });
updateNavigation();
