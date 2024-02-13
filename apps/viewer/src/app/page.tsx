export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen page-container">
      <div
        dangerouslySetInnerHTML={{
          __html: `<div class="m-auto flex component-selected" style="position: relative; justify-content: flex-start; flex-direction: column; align-items: flex-start; background: rgb(255, 255, 255); color: rgb(0, 0, 0); padding: 40px; margin: 0px; box-shadow: none; border-radius: 0px; flex-grow: unset; flex-shrink: 0; flex-basis: unset; width: auto; height: 90vh; box-sizing: border-box;"><div class="rt-Flex w-full min-h-10 border p-2 rt-r-display-flex rt-r-fd-row rt-r-jc-start rt-r-gap-4" draggable="true"><div class="rt-Box w-1/3"><div class="rt-Flex w-full min-h-10 border rt-r-display-flex rt-r-fd-column rt-r-jc-start"><button type="button" background="[object Object]" color="[object Object]" buttonstyle="full" margin="5,0,5,0" textcomponent="[object Object]" draggable="true" class="" style="max-width: max-content;"><h2 contenteditable="true" style="padding: 0px; margin: 0px;">Dragged Button</h2></button></div></div><div class="rt-Box w-2/3"><div class="rt-Flex w-full min-h-10 border rt-r-display-flex rt-r-fd-column rt-r-jc-start"><h2 contenteditable="true" class="component-selected" style="padding: 0px; margin: 0px; font-size: 51px;">Simple Text</h2></div></div></div><div></div></div>`,
        }}
      />
    </main>
  );
}
