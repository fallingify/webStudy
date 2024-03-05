<template>
    <div>
        <h1>Hello, {{name}}</h1>
        <p>Single File Component</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:"ljh",
        };
    }
};
</script>

<style>
h1{
    color : blue;   
}   
</style>