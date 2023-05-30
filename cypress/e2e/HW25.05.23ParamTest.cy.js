describe("Toastr", () => {

  beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click();
  })

  const Test1 = [

   { testData: 
    {
      position: 'top-right',
      title: 'title',
      content: 'content',
      time: '1000',
      type: 'success'
    },
    expectedResult:
  {
      icon: 'checkmark',
      title: 'title',
      content: 'content',
      color: 'rgb(96, 175, 32)',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      }
    }
  ]
  Test1.forEach(({testData, expectedResult}) => {
    it("top-right-success", () => {
      cy.get('.position-select .select-button').click();
      cy.contains(testData.position).click();
      cy.get('[ng-reflect-name="title"]').clear().type(testData.title);
      cy.get('[ng-reflect-name="content"]').clear().type(testData.content);
      cy.get('[ng-reflect-selected="primary"]').click();
      cy.contains(testData.type).click();;
      cy.get('[type="button"].select-button')
      cy.get('nb-card-footer').contains('Show toast').click();  
      cy.get('.content-container .title').should('include.text', expectedResult.title)
      cy.get('.content-container .message').should('include.text', expectedResult.content);
      cy.get('nb-toast').should('have.css', 'background-color').and('eq', expectedResult.color);
      cy.get('nb-toast').should('have.css', 'background-color').and('eq', expectedResult.color);
      cy.get('.toastr-overlay-container').should('have.css', 'justify-content').and('eq', expectedResult.justifyContent);
      cy.get('.toastr-overlay-container').should('have.css', 'align-items').and('eq', expectedResult.alignItems);
      cy.get('nb-toast').find(`g[data-name="${expectedResult.icon}"]`).should('exist');
    })

  const Test2 = [

  { testData2: 
   {
     position: 'top-left',
     title: 'title',
     content: 'content',
     time: '1000',
     type: 'warning'
   },
   expectedResult2:
 {
     icon: 'alert-triangle',
     title: 'title',
     content: 'content',
     color: 'rgb(255, 159, 5)',
     justifyContent: 'flex-start',
     alignItems: 'flex-start',
     }
   }
 ]
 Test2.forEach(({testData2, expectedResult2}) => {
   it("top-left-warning", () => {
     cy.get('.position-select .select-button').click();
     cy.contains(testData2.position).click();
     cy.get('[ng-reflect-name="title"]').clear().type(testData2.title);
     cy.get('[ng-reflect-name="content"]').clear().type(testData2.content);
     cy.get('[ng-reflect-selected="primary"]').click();
     cy.contains(testData2.type).click();;
     cy.get('[type="button"].select-button')
     cy.get('nb-card-footer').contains('Show toast').click();  
     cy.get('.content-container .title').should('include.text', expectedResult2.title)
     cy.get('.content-container .message').should('include.text', expectedResult2.content);
     cy.get('nb-toast').should('have.css', 'background-color').and('eq', expectedResult2.color);
     cy.get('nb-toast').should('have.css', 'background-color').and('eq', expectedResult2.color);
     cy.get('.toastr-overlay-container').should('have.css', 'justify-content').and('eq', expectedResult2.justifyContent);
     cy.get('.toastr-overlay-container').should('have.css', 'align-items').and('eq', expectedResult2.alignItems);
     cy.get('nb-toast').find(`g[data-name="${expectedResult2.icon}"]`).should('exist');
 })

 const Test3 = [

  { testData3: 
   {
     position: 'bottom-right',
     title: 'title',
     content: 'content',
     time: '1000',
     type: 'info'
   },
   expectedResult3:
 {
     icon: 'question-mark',
     title: 'title',
     content: 'content',
     color: 'rgb(4, 149, 238)',
     justifyContent: 'flex-end',
     alignItems: 'flex-end',
     }
   }
 ]
 Test3.forEach(({testData3, expectedResult3}) => {
   it("bottom-right-info", () => {
     cy.get('.position-select .select-button').click();
     cy.contains(testData3.position).click();
     cy.get('[ng-reflect-name="title"]').clear().type(testData3.title);
     cy.get('[ng-reflect-name="content"]').clear().type(testData3.content);
     cy.get('[ng-reflect-selected="primary"]').click();
     cy.contains(testData3.type).click();;
     cy.get('[type="button"].select-button')
     cy.get('nb-card-footer').contains('Show toast').click();  
     cy.get('.content-container .title').should('include.text', expectedResult3.title)
     cy.get('.content-container .message').should('include.text', expectedResult3.content);
     cy.get('nb-toast').should('have.css', 'background-color').and('eq', expectedResult3.color);
     cy.get('nb-toast').should('have.css', 'background-color').and('eq', expectedResult3.color);
     cy.get('.toastr-overlay-container').should('have.css', 'justify-content').and('eq', expectedResult3.justifyContent);
     cy.get('.toastr-overlay-container').should('have.css', 'align-items').and('eq', expectedResult3.alignItems);
     cy.get('nb-toast').find(`g[data-name="${expectedResult3.icon}"]`).should('exist');
 })

 const Test4 = [

  { testData4: 
   {
     position: 'bottom-left',
     title: 'title',
     content: 'content',
     time: '1000',
     type: 'danger'
   },
   expectedResult4:
 {
     icon: 'flash',
     title: 'title',
     content: 'content',
     color: 'rgb(176, 0, 32)',
     justifyContent: 'flex-start',
     alignItems: 'flex-end',
     }
   }
 ]
 Test4.forEach(({testData4, expectedResult4}) => {
   it("bottom-left-danger", () => {
     cy.get('.position-select .select-button').click();
     cy.contains(testData4.position).click();
     cy.get('[ng-reflect-name="title"]').clear().type(testData4.title);
     cy.get('[ng-reflect-name="content"]').clear().type(testData4.content);
     cy.get('[ng-reflect-selected="primary"]').click();
     cy.contains(testData4.type).click();;
     cy.get('[type="button"].select-button')
     cy.get('nb-card-footer').contains('Show toast').click();  
     cy.get('.content-container .title').should('include.text', expectedResult4.title)
     cy.get('.content-container .message').should('include.text', expectedResult4.content);
     cy.get('nb-toast').should('have.css', 'background-color').and('eq', expectedResult4.color);
     cy.get('nb-toast').should('have.css', 'background-color').and('eq', expectedResult4.color);
     cy.get('.toastr-overlay-container').should('have.css', 'justify-content').and('eq', expectedResult4.justifyContent);
     cy.get('.toastr-overlay-container').should('have.css', 'align-items').and('eq', expectedResult4.alignItems);
     cy.get('nb-toast').find(`g[data-name="${expectedResult4.icon}"]`).should('exist');
 })
})
})
})
})
})




