<script>
import { each } from "svelte/internal";
const pageName = 'Bio';



</script>

<div class='container-fluid'>
    <h1>{pageName}</h1>
    <div class='about-info mr-auto ml-auto bg-light'>    
      <!-- {#each about as info}
        <p>{info.p}</p>
      {/each} -->
      <p>Welcome!</p>
      <p>My name is Andrew Riggs, I am a self-taught web developer.<br />
         I need to write something better here.</p>
      <p></p>
    </div> 
</div>

<style lang="scss">
$color: #ff3e00;
h1 {
		color: $color;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
    }

.about-info{
    width: 50%;
    background: lightgrey;
    border: 1px solid black;
    box-shadow: 1px 1px darkgrey;
}

.about-info p{
    margin-bottom: .2em;
}
    
</style>