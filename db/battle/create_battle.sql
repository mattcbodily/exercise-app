insert into battle (
    battle_name,
    battle_category,
    battle_condition
) values (
    ${battleName},
    ${battleCategory},
    ${battleCondition}
)
returning *;