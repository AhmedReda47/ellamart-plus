<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="5">
            <div class="cont">
              <h3><span>Huge saving</span> on UHD Televisions</h3>
              <p class="hint">Sale up to 70% off on selected items*</p>
              <v-btn
                height="50"
                width="160"
                density="compact"
                variant="outlined"
                style="border-radius: 30px; text-transform: none"
                >Shope Now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.banner {
  width: 100%;
  .parent {
    height: 400px;
    background-image: url(../../assets/images/upper-banner.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .cont {
      color: white;
      padding: 40px 0 0;
      h3 {
        font-size: 45px;
        font-weight: 900;
        span {
          color: #2dfbdf;
        }
      }
      .hint {
        margin: 20px 0 40px;
      }
    }
  }
}
</style>
