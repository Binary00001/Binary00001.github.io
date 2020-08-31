<script>
  const pageName = 'Projects';

  const projectsList = [
      {
          name: 'The Ken Wheeler Clock',
          src: './images/ken-wheeler-clock.png',
          description: 'An analog clock, made using HTML, CSS and Javascript.',
          repo: 'https://github.com/Binary00001/ken-wheeler-clock',
          url: 'https://tender-kirch-c235e3.netlify.app/'
      },
      {
          name: 'Rick and Morty Quote Generator',
          src: './images/rick-and-morty-quote-generator.png',
          description: 'A random quote generator project for freecodecamp.org',
          repo: 'https://github.com/Binary00001/rick-and-morty-quotes',
          url: 'https://tender-jepsen-fad8c9.netlify.app/',
      }
  ]

</script>

<div class='container-fluid bg-light'>
    <h1>{pageName}</h1>

    <div class='row justify-content-around'>
    {#each projectsList as project}
    <div class='card bg-secondary' style='width: 50vmin'>
        <a href={project.url}><img class='card-img-top' src={project.src} style='width: 50vmin; height: 50vmin;' alt={project.name + ' thumbnail'} /></a>
        <div class='card-body'>
            <h4 class='card-title'>{project.name}</h4>
            <p class=''>{project.description}</p>
            <a href={project.repo}><p>Github Repo</p></a>
        </div>
    </div>
      
    {/each}
    </div>
</div>

<style lang="scss">
    $color: #ff3e00;


    .container-fluid{
        background-color: $color;
    }

    h1 {
            color: $color;
            text-transform: uppercase;
            font-size: 4em;
            font-weight: 100;
        }
        
    </style>