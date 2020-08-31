<script>
 let name = 'Andrew Riggs';
</script>

<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky">

    <!-- Navbar brand -->
    <a class="navbar-brand" href="/">{name}</a>
  
    <!-- Collapse button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicNav"
      aria-controls="basicNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <!-- Collapsible content -->
    <div class="collapse navbar-collapse" id="basicNav">
  
      <!-- Links -->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/bio">Bio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects">Projects</a>
        </li>
      </ul>
     
    </div>
    <!-- Collapsible content -->
  
  </nav>

<style lang="scss">
        $color: rgba(255, 80, 80, 1);
        $secondary-color: rgba(50, 50, 250, 1);
        

        a.navbar-brand {
              color: $color;
          }

        a.navbar-brand:hover {
            color: $color;
        }

        a.navbar-brand:visited {
            color: $color;
        }


    

</style>