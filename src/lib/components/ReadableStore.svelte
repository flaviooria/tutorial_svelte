<script>
    import { time } from "../store/read.store";

    let hour, minutes, seconds


    $: if (false) {
        hour = $time[0]
        minutes = $time[1]
        seconds = $time[2]
    }
</script>

<h3>Hoy curso de svelte en vivo a las 22:00:00 hrs</h3>
<p>Falta:</p>
<section class="cronometer">
    <div class="hour">
        <p>{hour ?? '00'}</p>
        <span>HORAS</span>
    </div>
    <div class="minutes">
        <p>{minutes ?? '00'}</p>
        <span>MINUTOS</span>
    </div>
    <div class="seconds">
        <p>{seconds ?? '00'}</p>
        <span>SEGUNDOS</span>
    </div>
</section>

<style>
    .cronometer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        text-align: center;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border-radius: 8px;
        background-color: rgb(179, 206, 224);
    }

    .cronometer div {
        border-radius: 8px;
        background-color: #09f;
        width: 130px;
        height: 100px;
        margin: 0 auto;
        padding: 10px;
    }

    .cronometer p {
        font-weight: bold;
        font-size: 3em;
        color: rgb(193, 230, 241);
        margin: 10px;
    }

    .cronometer span {
        font-weight: 500;
        font-size: 1em;
        color: rgb(255, 255, 255);
    }
</style>