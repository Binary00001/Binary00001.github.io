<script>
  const pageName = 'Home';
</script>

<div class='container-fluid'>
    <h1>{pageName}</h1>
    <img src='/favicon.png' alt='logo: circle with an A inside'/>
    <footer class='footer fixed-bottom bg-dark'>
        <div class='row justify-content-evenly'>
            <a href='https://github.com/binary00001'><i class='fa fa-github fa-2x text-muted'></i></a>
            <a href='https://twitter.com/mistahbinary'><i class='fa fa-twitter fa-2x text-muted'></i></a>
            <a href='https://linkedin.com/'><i class='fa fa-linkedin fa-2x text-muted'></i></a>
        </div>
    </footer>
    
</div>

<style lang="scss">
    $color: #ff3e00;
    h1 {
            color: $color;
            text-transform: uppercase;
            font-size: 4em;
            font-weight: 100;
        }

    .footer {
        display : flex;
        justify-content: space-around;
        align-items: center;
    }
    .footer ul {
        color: $color;
        list-style: none;
    }

    .footer a {
        // color: $color;
        text-decoration: none;
        margin: 4px;
    }

    
        
    </style>