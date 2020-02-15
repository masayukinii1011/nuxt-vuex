<template>
  <div class="container">
    <div>
      <!--helloストアのstate呼び出し-->
      <p>{{$store.state.hello.message}}</p>
      <!--helloストアのmutationsを呼び出し。第一引数にメソッド。第二引数にメソッドに渡す値-->
      <button
        v-on:click="$store.commit('hello/updateMessage', 'MutationsにCommit!')"
      >MutationsにCommit</button>
      <!--helloストアのactionsを呼び出し。第一引数にメソッド。第二引数にメソッドに渡す値-->
      <button
        v-on:click="$store.dispatch('hello/updateMessageAction', 'ActionにDispatch!')"
      >ActionにDispatch</button>
    </div>
  </div>
</template>
