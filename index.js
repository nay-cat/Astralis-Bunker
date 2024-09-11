const logs = [
    "announcements-s1.html",
    "apr-air-force.html",
    "apr-general.html",
    "apr-navy.html",
    "aronia-airforce.html",
    "aronia-army.html",
    "aronia-lore.html",
    "columbia-air-force.html",
    "columbia-general.html",
    "columbia-navy.html",
    "columbia-roleplay.html",
    "columbian-marines.html",
    "eliza-lore.html",
    "eliza-roleplay.html",
    "epilogue-breaking-news.html",
    "giratina-general.html",
    "gong-air-force.html",
    "gong-army.html",
    "gong-general.html",
    "gong-lore.html",
    "gong-navy.html",
    "gong-roleplay.html",
    "iae-army.html",
    "iae-naval-air.html",
    "iae-navy.html",
    "iae-roleplay.html",
    "iae-tarn-cheranadu.html",
    "jovian-shogunate-general.html",
    "jovian-shogunate-navy.html",
    "karemi-lore.html",
    "karmesia-lore.html",
    "karmesin-army.html",
    "karmesin-navy.html",
    "kiraida-army.html",
    "kiraida-general.html",
    "leukopa-airforce.html",
    "leukopa-army.html",
    "leukopa-industries-and-corporations.html",
    "leukopa-lore.html",
    "leukopa-navy.html",
    "lunaria-nova.html",
    "mestra-general.html",
    "mestra-lore.html",
    "mestran-army.html",
    "milize-lore.html",
    "milize-navy.html",
    "milize-roleplay.html",
    "mutant-fight-chat.html",
    "nusia-airforce.html",
    "nusia-general.html",
    "nusia-lore.html",
    "nusia-navy.html",
    "othyan-airforce.html",
    "othyan-army.html",
    "othyan-navy.html",
    "quokka-general.html",
    "ruslavian-aryavat-army.html",
    "ruslavian-aryavat-general.html",
    "ruslavian-aryavat-navy.html",
    "ruslavian-aryavat-roleplay.html",
    "ruslavian-territories-archive.html",
    "season1-achievements.html",
    "senshi-army.html",
    "senshi-general.html",
    "senshi-navy.html",
    "senshi-roleplay.html",
    "treaties-deals-s1.html",
    "war-chat-s1.html",
    "world-economy-s1.html",
    "world-map-legacy.html",
    "yuktobania-army.html",
    "yuktobania-general.html",
    "yuktobania-lore.html",
    "yuktobania-navy.html"
  ];
  
function capitalize(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  function formatLogName(logName) {
    let formattedName = logName.replace('.html', '');
    formattedName = formattedName.replace(/-/g, ' ');
    return capitalize(formattedName);
  }
  
  const logList = document.getElementById('log-list');
  
  logs.forEach(log => {
    const li = document.createElement('li');

    if (log.includes('news')) {
      li.classList.add('news');
    }
  
    const a = document.createElement('a');
    a.href = `saves/${log}`;  
    a.textContent = formatLogName(log);  
    li.appendChild(a);
    logList.appendChild(li);
  });