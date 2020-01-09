select * from battle b
join member_battle_join mb on b.battle_id = mb.battle_id
where mb.member_id = ${id};