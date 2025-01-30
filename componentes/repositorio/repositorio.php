<div id="repositorio">
    <div id="contenedor">
    <?php
        include "lib/colores.php";
        foreach($css3_colors as $key => $color){
            $active = ($key === 0) ? 'activo' : '';
            echo '<div class="elemento '.$active.'" data-color="'.$color.'" style="background-color:'.$color.'"></div>';
        }
    ?>
    </div>
</div>

<div class="color-indicator"></div>
    
<style>
    <?php include "repositorio.css";?>
</style>
<script>
    <?php include "repositorio.js";?>
</script>
