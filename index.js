const logs = [
  "active-war-gamma.html",
  "active-warfare-alpha.html",
  "active-warfare-beta.html",
  "active-warfare-sigma.html",
  "announcements-s1.html",
  "apr-air-force.html",
  "apr-army.html",
  "apr-economy.html",
  "apr-general.html",
  "apr-lore.html",
  "apr-navy.html",
  "aronia-airforce.html",
  "aronia-army.html",
  "aronia-lore.html",
  "aryavat-territories-archive.html",
  "columbia-air-force.html",
  "columbia-general.html",
  "columbia-navy.html",
  "columbia-roleplay.html",
  "columbian-marines.html",
  "eliza-lore.html",
  "eliza-roleplay.html",
  "epilogue-breaking-news.html",
  "events-channel-s3.html",
  "giratina-general.html",
  "gong-air-force.html",
  "gong-army.html",
  "gong-general.html",
  "gong-lore.html",
  "gong-navy.html",
  "gong-roleplay.html",
  "iae-airforce.html",
  "iae-army.html",
  "iae-civilian.html",
  "iae-general.html",
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
  "kiraida-air-force.html",
  "kiraida-army.html",
  "kiraida-general.html",
  "kiraida-navy.html",
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
  "nusia-army.html",
  "nusia-general.html",
  "nusia-lore.html",
  "nusia-navy.html",
  "othya-lore.html",
  "othyan-airforce.html",
  "othyan-army.html",
  "othyan-missile-forces.html",
  "othyan-navy.html",
  "othyan-space-program.html",
  "quokka-general.html",
  "redacted-airforce.html",
  "redacted-army.html",
  "redacted-navy.html",
  "ruslavian-aryavat-airforce.html",
  "ruslavian-aryavat-army.html",
  "ruslavian-aryavat-general.html",
  "ruslavian-aryavat-lore.html",
  "ruslavian-aryavat-navy.html",
  "ruslavian-aryavat-roleplay.html",
  "ruslavian-territories-archive.html",
  "season1-achievements.html",
  "season3-an.html",
  "senshi-army.html",
  "senshi-general.html",
  "senshi-navy.html",
  "senshi-roleplay.html",
  "treaties-deals-s1.html",
  "war-chat-s1.html",
  "war-threads.html",
  "warfare-alpha.html",
  "world-economy-s1.html",
  "world-map-legacy.html",
  "yuktobania-army.html",
  "yuktobania-general.html",
  "yuktobania-lore.html",
  "yuktobania-navy.html",
  "test-news"
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
