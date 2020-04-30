import React, {useState} from 'react';
import Enzyme, {create, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from './components/Grid';
import Cell from './components/Cell'

Enzyme.configure({ adapter : new Adapter() });
describe('Grid',()=>{
    it('test changement de symbole',() => {
        const wrapper = mount(<Grid/>,{ attachTo: document.getElementById('ordi') }); 
        const cell = wrapper.find('#cell0');
        cell.simulate('click');
        expect(cell.text()).toBe('X');
        const cell2 = wrapper.find('#cell1');
        cell2.simulate('click');
        expect(cell2.text()).toBe('O');
    })
    
    it('test debut de partie',()=>{
        const wrapper = mount(<Grid/>,{ attachTo: document.getElementById('ordi') }); 
        expect(wrapper.find('#State').text()).toBe('C\'est le tour de X')
        expect(wrapper.find('#cell0').text()).toBe('');
        expect(wrapper.find('#cell1').text()).toBe('');
        expect(wrapper.find('#cell2').text()).toBe('');
        expect(wrapper.find('#cell3').text()).toBe('');
        expect(wrapper.find('#cell4').text()).toBe('');
        expect(wrapper.find('#cell5').text()).toBe('');
        expect(wrapper.find('#cell6').text()).toBe('');
        expect(wrapper.find('#cell7').text()).toBe('');
        expect(wrapper.find('#cell8').text()).toBe('');
    })
    
    it('test victoire de X',()=>{
        const wrapper = mount(<Grid/>,{ attachTo: document.getElementById('ordi') }); 
        wrapper.find("#cell0").simulate('click');
        wrapper.find("#cell3").simulate('click');
        wrapper.find("#cell1").simulate('click');
        wrapper.find("#cell4").simulate('click');
        wrapper.find("#cell2").simulate('click');
        expect(wrapper.find('#State').text()).toBe('X a gagné');
        expect(wrapper.find('#ScoreX').text()).toBe('Score X : 1');
    })
    it('debut de parti',()=>{
        const wrapper = mount(<Grid/>,{ attachTo: document.getElementById('ordi') }); 
        wrapper.find("#cell0").simulate('click');
        wrapper.find("#cell3").simulate('click');
        wrapper.find("#cell1").simulate('click');
        wrapper.find("#cell4").simulate('click');
        wrapper.find("#cell2").simulate('click');
        wrapper.find('#restart').simulate('click');
        expect(wrapper.find('#State').text()).toBe('C\'est le tour de X')
        expect(wrapper.find('#cell0').text()).toBe('');
        expect(wrapper.find('#cell1').text()).toBe('');
        expect(wrapper.find('#cell2').text()).toBe('');
        expect(wrapper.find('#cell3').text()).toBe('');
        expect(wrapper.find('#cell4').text()).toBe('');
        expect(wrapper.find('#cell5').text()).toBe('');
        expect(wrapper.find('#cell6').text()).toBe('');
        expect(wrapper.find('#cell7').text()).toBe('');
        expect(wrapper.find('#cell8').text()).toBe('');
    })
})