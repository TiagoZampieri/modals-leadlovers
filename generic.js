$('body').append(`<div
class="md-dialog-container telemetry-modal ng-scope"
tabindex="-1"
style="top: 0px; height: 100vh;"
>
<div
  class="telemetry-modal-overlay"
  style="
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100vw;
    height: 100vh;
  "
></div>
<div class="md-dialog-focus-trap" tabindex="0"></div>
<md-dialog
  aria-label="User Profiles"
  flex="40"
  class="_md flex-40 md-transition-in"
  role="dialog"
  tabindex="-1"
  aria-describedby="dialogContent_5"
  style="max-width: 450px;"
>
  <md-dialog-content id="dialogContent_5" style="overflow: hidden;">

    <div
      class="md-dialog-content"
      style="text-align: left; padding: 40px; padding-bottom: 40px;"
    >
        <div class="tm-modal-ilustra">
            <img src="https://app.leadlovers.com/Content/images/svg/dashboard-communication-card-illustration.svg">
        </div>
        <h2 class="tm-modal-title">
          ## Tìtulo ##
        </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa
        libero, lobortis non neque vitae, sodales maximus augue.
      </p>
    </div>

    <div class="tm-modal-actions">
      <button id="tm-close" class="tm-outline-button">
        ENTENDI
      </button>
      <button class="tm-button-accent">
        CRIAR
      </button>
    </div>
  </md-dialog-content>
</md-dialog>
<div class="md-dialog-focus-trap" tabindex="0"></div>
<style>
    .tm-modal-ilustra{
        display: flex;justify-content: center;padding: 24px;margin-bottom: 16px;
    }
  .tm-modal-title {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 16px;
  }
  .tm-modal-actions {
    display: flex;
    justify-content: flex-end;
    padding: 24px;
  }

  .tm-feature-badge {
    font-size: 13px;
    font-weight: bold;
    padding: 2px;
    border: 2px solid #dd235b;
    box-sizing: border-box;
    border-radius: 4px;
    color: #dd235b;
    margin-right: 8px;
  }

  .tm-button-accent {
    color: #dd235b;
    background: transparent;
    border-radius: 48px;
    font-weight: 500;
    font-size: 14px;
    padding: 8px 20px;
    border: none;
  }

  .tm-outline-button {
    color: rgba(0, 0, 0, 0.6);
    border-radius: 200px;
    background: transparent;
    border: none;
    padding: 16px;
    font-weight: 500;
    font-size: 14px;
  }

</style>
</div> `); 
$('.telemetry-modal-overlay, .telemetry-modal-link').on('click', () => $('.telemetry-modal').remove());
$('#tm-close').on('click',  () => $('.telemetry-modal').remove());