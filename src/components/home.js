
var React = require("react"),
	_ = require("lodash"),
	Link = require("react-router").Link,
	members = require("../data/members");

var Home = React.createClass({
	render: function(){
		var rows = _.map(members,function(info,id){
			return (
				<tr key={id}>
					<td><img src={"http://units.wesnoth.org/1.10/pics/core$images$units$"+info.icon+".png"} alt={info.icon} title={info.icon} /></td>
					<td><Link to={"/member/"+id}>{info.name}</Link></td>
					<td>{info.blogposts.length}</td>
					<td>{info.pullrequests.length}</td>
				</tr>
			);
		});
		return (
			<div>
				<p>Ria guild! To join, find your preferred icon in the <Link to="/gallery">gallery</Link>!</p>
				<table>
					<thead>
						<tr><th>Pic</th><th>Name</th><th>Posts</th><th>PR:s</th></tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = Home;
