<template>
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/">Infrastructure Config Archive</router-link>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/">Status</router-link>
          </li>
          <li>
            <router-link to="/archive">Archive</router-link>
          </li>
          <li>
            <router-link to="/devicelist">Device List</router-link>
          </li>
          <li>
            <router-link to="/devicetypes">Device Types</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
