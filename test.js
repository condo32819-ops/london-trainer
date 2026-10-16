const {Chess}=require('chess.js');const {LINES,PROBLEMS}=require('./lines.js');let bad=0;
for(const l of LINES){const c=new Chess();for(const [s] of l.moves){if(!c.move(s)){console.log('ILLEGAL',l.id,s,c.fen());bad++;break;}}console.log(l.id,'ok',l.moves.length/2,'moves',c.fen());}
for(const p of PROBLEMS){const c=new Chess();for(const s of p.setup)if(!c.move(s)){console.log('BADSETUP',p.name,s);bad++}
 if(c.turn()!=='w'){console.log('notwhite',p.name);bad++}
 for(const o of p.ok){const d=new Chess(c.fen());if(!d.move(o)){console.log('BADOK',p.name,o);bad++}}}
console.log(bad?'FAIL':'ALL PASS');process.exit(bad?1:0);
