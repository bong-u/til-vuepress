<template>
    <h1>hello</h1>
</template>

<script>
    // import { getLog } from './GitModule.js';
    // const getLog = require('./GitModule');
    import getLog from './GitModule.js';
    export default {
        created() {
            console.log(getLog());
        },
        methods : {
        }
    }
        
</script>