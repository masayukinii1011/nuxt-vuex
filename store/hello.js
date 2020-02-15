//helloストア

//state
export const state = () => ({
  message: 'Hello Vuex!'
})

//mutations。stateを更新。第二引数のpayloadで呼び出し側から値を受け取る。
export const mutations = ({
  updateMessage: function (state, payload) {
    state.message = payload
  }
})

//actions。mutationsを呼び出す。第二引数のpayloadで呼び出し側から値を受け取る。
export const actions = ({
  updateMessageAction(context, payload) {
    context.commit('updateMessage', payload)
  }
})
