// HELPER FUNCTIONS

function pathFilename(path) {
	var match = /\/([^\/]+)$/.exec(path);
	if (match) {
		return match[1];
	}
}

function getRandomInt(min, max) {
	// via https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/random#Examples
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(items) {
	return items[getRandomInt(0, items.length-1)];
}

function linkFile(url) {
	return {type:'dir', enter:function() {
		window.location = url;
	}};
}


Filesystem = {
	'welcome.txt': {type:'file', read:function(terminal) {
		terminal.print($('<h4>').text('Welcome to the project and resume page for Bradley Evans'));
		terminal.print('To navigate articles, enter "next", "prev", "first", "last", "display", or "random".');
		terminal.print('Use "ls", "cat", and "cd" to navigate the filesystem.');
	}},
	'license.txt': {type:'file', read:function(terminal) {
		terminal.print($('<p>').html('This page was built by Bradley Evans for personal use. The following acknowledgements are attached.'));
		terminal.print($('<p>').html('Client-side logic for Wordpress CLI theme :: <a href="http://thrind.xamai.ca/">R. McFarland, 2006, 2007, 2008</a>'));
		terminal.print($('<p>').html('jQuery rewrite and overhaul :: <a href="http://www.chromakode.com/">Chromakode, 2010</a>'));
		terminal.print();
		$.each([
			'This program is free software; you can redistribute it and/or',
			'modify it under the terms of the GNU General Public License',
			'as published by the Free Software Foundation; either version 2',
			'of the License, or (at your option) any later version.',
			'',
			'This program is distributed in the hope that it will be useful,',
			'but WITHOUT ANY WARRANTY; without even the implied warranty of',
			'MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the',
			'GNU General Public License for more details.',
			'',
			'You should have received a copy of the GNU General Public License',
			'along with this program; if not, write to the Free Software',
			'Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.'
			
		], function(num, line) {
			terminal.print(line);
		});
	}},
	'resume.txt': {type:'file', read:function(terminal) {
		terminal.printFromFile("resume.txt");
	}},
	'testfile.txt': {type:'file', read:function(terminal) {
		terminal.printFromFile("testfile.txt");
	}}
};
Filesystem['linkedin'] = linkFile('https://www.linkedin.com/in/bfevans');
Filesystem['github_repos'] = linkFile('https://github.com/bradley-evans/');
TerminalShell.pwd = Filesystem;