<template>
  <mdb-container fluid>

    <Search />

    <hr class="my-5" />

    <section>
      <mdb-card>
        <mdb-card-body>
          <!--Table-->
          <table class="table">
            <!--Table head-->
            <thead class="mdb-color darken-3">
            <tr class="text-white">
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
            </thead>
            <!--Table head-->

            <!--Table body-->
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
            <!--Table body-->
          </table>
          <!--Table-->
        </mdb-card-body>
      </mdb-card>
    </section>

    <hr class="my-5" />



  </mdb-container>
</template>

<script>
  import {mdbContainer, mdbCardBody, mdbCard} from "mdbvue";
  import Search from "@/components/books/Search";

  export default {
    name: "Books",
    components: {
      mdbContainer, mdbCardBody, mdbCard, Search,
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
