var Gaffa = require('gaffa');

function LinkBehaviour(){}
LinkBehaviour = Gaffa.createSpec(LinkBehaviour, Gaffa.Behaviour);
LinkBehaviour.prototype._type = 'link';
LinkBehaviour.prototype.target = new Gaffa.Property();
LinkBehaviour.prototype.source = new Gaffa.Property({
    update: function(behaviour, value){
        behaviour.target.set(value, !behaviour.cleans.value);
    }
});
LinkBehaviour.prototype.cleans = new Gaffa.Property();

module.exports = LinkBehaviour;