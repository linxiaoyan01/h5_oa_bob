/*
 * @Author: your name
 * @Date: 2021-09-15 09:59:15
 * @LastEditTime: 2022-03-14 14:00:52
 * @LastEditors: Joker
 * @Description: vue store
 * @FilePath: /20211216/src/store/index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {
            userCode: '',
            userId: '',
            userName: '',
            ou: ''
        }, // 当前登录用户信息
        enumerationData: {}, // 枚举数据
        currentProcess: {}, // 当前流程对象
        currentList: '', // 当前查询的列表类型
        dataDetail: {}, // 当前流程详情数据
        nextLink: {}, // 下一环节数据
        cacheList: ['homePage', 'listPage'], // 组件缓存list
        refresh: false, // 是否刷新页面
        fromOut: false, // 是否外部跳转到OA
        opinionData: null, // 保存意见内容
    },
    mutations: {
        setUserInfo(state, payload) {
            state.userInfo = { ...state.userInfo, ...payload }
        },
        setEnumerationData(state, payload) {
            state.enumerationData = payload
        },
        setCurrentProcess(state, payload) {
            state.currentProcess = payload
        },
        setCurrentList(state, payload) {
            state.currentList = payload
        },
        setDataDetail(state, payload) {
            state.dataDetail = { ...state.dataDetail, payload }
        },
        setNextLink(state, payload) {
            state.nextLink = { ...state, ...payload }
        },
        setCacheList(state, payload) {
            state.cacheList = payload
        },
        setRefresh(state, payload) {
            state.refresh = payload
        },
        setFromOut(state, payload) {
            state.fromOut = payload
        },
        setOpinionData(state, payload) {
            state.opinionData = payload
        }
    }
})