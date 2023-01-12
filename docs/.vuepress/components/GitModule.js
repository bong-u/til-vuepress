'use strict';

// import simpleGit from 'simple-git';

const getLog = async() => {
    const simpleGit = require('simple-git');
    const git = await simpleGit('../../../../');
    const logs = await git.log();
    const dateSet = new Set();
    
    logs.all.map( log => {
        dateSet.add(log.date.split('T')[0]);
    });
};

export default getLog;