module.exports = {
    getUserBattles: (req, res) => {
        const {id} = req.params,
              db = req.app.get('db');

        db.battle.get_user_battles({id})
        .then(battles => res.status(200).send(battles))
        .catch(err => res.status(500).send(err))
    },
    createBattle: async(req, res) => {
        const {id, battleName, battleCategory, battleCondition} = req.body,
              db = req.app.get('db');

        const battle = await db.battle.create_battle({id, battleName, battleCategory, battleCondition})
        .then(battle => {
            db.battle.add_battle_user({member_id: id, battle_id: battle[0].battle_id});
            res.status(200).send(battle[0])
        })
        .catch(err => res.status(500).send(err));

    }
}