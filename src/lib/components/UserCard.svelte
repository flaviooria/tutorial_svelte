<script>
  export let photo, first_name, last_name, email, company;
</script>

<div class="flex justify-center mt-3">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <img src="{photo}" class="rounded-full mb-4 mx-auto" alt="Avatar" />
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
      {first_name}
      {last_name}
    </h5>
    <p class="text-gray-700 text-base mb-4">
      Email: <span>{email}</span>
    </p>
    <p class="text-gray-700 text-base mb-4">
      Company: <span>{company}</span>
    </p>
  </div>
</div>
