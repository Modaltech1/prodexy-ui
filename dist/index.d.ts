import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { DayPicker, DayButton } from 'react-day-picker';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import * as RechartsPrimitive from 'recharts';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { Command as Command$1 } from 'cmdk';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { Drawer as Drawer$1 } from 'vaul';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, FieldPath, ControllerProps } from 'react-hook-form';
import { Slot } from '@radix-ui/react-slot';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { OTPInput } from 'input-otp';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Separator as Separator$1, Panel, Group } from 'react-resizable-panels';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { ToasterProps } from 'sonner';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as ToastPrimitives from '@radix-ui/react-toast';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { ClassValue } from 'clsx';
import { ThemeProviderProps } from 'next-themes';

declare function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>): any;
declare function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>): any;
declare function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>): any;
declare function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>): any;

declare function AlertDialog({ ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Root>): any;
declare function AlertDialogTrigger({ ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>): any;
declare function AlertDialogPortal({ ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Portal>): any;
declare function AlertDialogOverlay({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>): any;
declare function AlertDialogContent({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Content>): any;
declare function AlertDialogHeader({ className, ...props }: React.ComponentProps<'div'>): any;
declare function AlertDialogFooter({ className, ...props }: React.ComponentProps<'div'>): any;
declare function AlertDialogTitle({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Title>): any;
declare function AlertDialogDescription({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Description>): any;
declare function AlertDialogAction({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Action>): any;
declare function AlertDialogCancel({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>): any;

declare const alertVariants: (props?: {
    variant?: "default" | "destructive";
} & class_variance_authority_types.ClassProp) => string;
declare function Alert({ className, variant, ...props }: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>): any;
declare function AlertTitle({ className, ...props }: React.ComponentProps<'div'>): any;
declare function AlertDescription({ className, ...props }: React.ComponentProps<'div'>): any;

declare function AspectRatio({ ...props }: React.ComponentProps<typeof AspectRatioPrimitive.Root>): any;

declare function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>): any;
declare function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>): any;
declare function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>): any;

declare const badgeVariants: (props?: {
    variant?: "default" | "destructive" | "outline" | "secondary";
} & class_variance_authority_types.ClassProp) => string;
declare function Badge({ className, variant, asChild, ...props }: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): any;

declare function Breadcrumb({ ...props }: React.ComponentProps<'nav'>): any;
declare function BreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>): any;
declare function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>): any;
declare function BreadcrumbLink({ asChild, className, ...props }: React.ComponentProps<'a'> & {
    asChild?: boolean;
}): any;
declare function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>): any;
declare function BreadcrumbSeparator({ children, className, ...props }: React.ComponentProps<'li'>): any;
declare function BreadcrumbEllipsis({ className, ...props }: React.ComponentProps<'span'>): any;

declare function Separator({ className, orientation, decorative, ...props }: React.ComponentProps<typeof SeparatorPrimitive.Root>): any;

declare const buttonGroupVariants: (props?: {
    orientation?: "horizontal" | "vertical";
} & class_variance_authority_types.ClassProp) => string;
declare function ButtonGroup({ className, orientation, ...props }: React.ComponentProps<'div'> & VariantProps<typeof buttonGroupVariants>): any;
declare function ButtonGroupText({ className, asChild, ...props }: React.ComponentProps<'div'> & {
    asChild?: boolean;
}): any;
declare function ButtonGroupSeparator({ className, orientation, ...props }: React.ComponentProps<typeof Separator>): any;

declare const buttonVariants: (props?: {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
} & class_variance_authority_types.ClassProp) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): any;

declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, formatters, components, ...props }: React.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React.ComponentProps<typeof Button>['variant'];
}): any;
declare function CalendarDayButton({ className, day, modifiers, ...props }: React.ComponentProps<typeof DayButton>): any;

declare function Card({ className, ...props }: React.ComponentProps<'div'>): any;
declare function CardHeader({ className, ...props }: React.ComponentProps<'div'>): any;
declare function CardTitle({ className, ...props }: React.ComponentProps<'div'>): any;
declare function CardDescription({ className, ...props }: React.ComponentProps<'div'>): any;
declare function CardAction({ className, ...props }: React.ComponentProps<'div'>): any;
declare function CardContent({ className, ...props }: React.ComponentProps<'div'>): any;
declare function CardFooter({ className, ...props }: React.ComponentProps<'div'>): any;

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: 'horizontal' | 'vertical';
    setApi?: (api: CarouselApi) => void;
};
declare function Carousel({ orientation, opts, setApi, plugins, className, children, ...props }: React.ComponentProps<'div'> & CarouselProps): any;
declare function CarouselContent({ className, ...props }: React.ComponentProps<'div'>): any;
declare function CarouselItem({ className, ...props }: React.ComponentProps<'div'>): any;
declare function CarouselPrevious({ className, variant, size, ...props }: React.ComponentProps<typeof Button>): any;
declare function CarouselNext({ className, variant, size, ...props }: React.ComponentProps<typeof Button>): any;

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};
type ChartConfig = {
    [k in string]: {
        label?: React.ReactNode;
        icon?: React.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};
declare function ChartContainer({ id, className, children, config, ...props }: React.ComponentProps<'div'> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>['children'];
}): any;
declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => any;
declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;
declare function ChartTooltipContent({ active, payload, className, indicator, hideLabel, hideIndicator, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey, }: React.ComponentProps<typeof RechartsPrimitive.Tooltip> & React.ComponentProps<'div'> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: 'line' | 'dot' | 'dashed';
    nameKey?: string;
    labelKey?: string;
}): any;
declare const ChartLegend: React.MemoExoticComponent<(outsideProps: RechartsPrimitive.LegendProps) => React.ReactPortal | null>;
declare function ChartLegendContent({ className, hideIcon, payload, verticalAlign, nameKey, }: React.ComponentProps<'div'> & Pick<RechartsPrimitive.LegendProps, 'payload' | 'verticalAlign'> & {
    hideIcon?: boolean;
    nameKey?: string;
}): any;

declare function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>): any;

declare function Collapsible({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.Root>): any;
declare function CollapsibleTrigger({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>): any;
declare function CollapsibleContent({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>): any;

declare function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>): any;
declare function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>): any;
declare function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>): any;
declare function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>): any;
declare function DialogOverlay({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>): any;
declare function DialogContent({ className, children, showCloseButton, ...props }: React.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
}): any;
declare function DialogHeader({ className, ...props }: React.ComponentProps<'div'>): any;
declare function DialogFooter({ className, ...props }: React.ComponentProps<'div'>): any;
declare function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>): any;
declare function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>): any;

declare function Command({ className, ...props }: React.ComponentProps<typeof Command$1>): any;
declare function CommandDialog({ title, description, children, className, showCloseButton, ...props }: React.ComponentProps<typeof Dialog> & {
    title?: string;
    description?: string;
    className?: string;
    showCloseButton?: boolean;
}): any;
declare function CommandInput({ className, ...props }: React.ComponentProps<typeof Command$1.Input>): any;
declare function CommandList({ className, ...props }: React.ComponentProps<typeof Command$1.List>): any;
declare function CommandEmpty({ ...props }: React.ComponentProps<typeof Command$1.Empty>): any;
declare function CommandGroup({ className, ...props }: React.ComponentProps<typeof Command$1.Group>): any;
declare function CommandSeparator({ className, ...props }: React.ComponentProps<typeof Command$1.Separator>): any;
declare function CommandItem({ className, ...props }: React.ComponentProps<typeof Command$1.Item>): any;
declare function CommandShortcut({ className, ...props }: React.ComponentProps<'span'>): any;

declare function ContextMenu({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Root>): any;
declare function ContextMenuTrigger({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>): any;
declare function ContextMenuGroup({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Group>): any;
declare function ContextMenuPortal({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Portal>): any;
declare function ContextMenuSub({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Sub>): any;
declare function ContextMenuRadioGroup({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>): any;
declare function ContextMenuSubTrigger({ className, inset, children, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): any;
declare function ContextMenuSubContent({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>): any;
declare function ContextMenuContent({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Content>): any;
declare function ContextMenuItem({ className, inset, variant, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
}): any;
declare function ContextMenuCheckboxItem({ className, children, checked, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>): any;
declare function ContextMenuRadioItem({ className, children, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>): any;
declare function ContextMenuLabel({ className, inset, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
}): any;
declare function ContextMenuSeparator({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Separator>): any;
declare function ContextMenuShortcut({ className, ...props }: React.ComponentProps<'span'>): any;

declare function Drawer({ ...props }: React.ComponentProps<typeof Drawer$1.Root>): any;
declare function DrawerTrigger({ ...props }: React.ComponentProps<typeof Drawer$1.Trigger>): any;
declare function DrawerPortal({ ...props }: React.ComponentProps<typeof Drawer$1.Portal>): any;
declare function DrawerClose({ ...props }: React.ComponentProps<typeof Drawer$1.Close>): any;
declare function DrawerOverlay({ className, ...props }: React.ComponentProps<typeof Drawer$1.Overlay>): any;
declare function DrawerContent({ className, children, ...props }: React.ComponentProps<typeof Drawer$1.Content>): any;
declare function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>): any;
declare function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>): any;
declare function DrawerTitle({ className, ...props }: React.ComponentProps<typeof Drawer$1.Title>): any;
declare function DrawerDescription({ className, ...props }: React.ComponentProps<typeof Drawer$1.Description>): any;

declare function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>): any;
declare function DropdownMenuPortal({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>): any;
declare function DropdownMenuTrigger({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>): any;
declare function DropdownMenuContent({ className, sideOffset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Content>): any;
declare function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>): any;
declare function DropdownMenuItem({ className, inset, variant, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
}): any;
declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>): any;
declare function DropdownMenuRadioGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>): any;
declare function DropdownMenuRadioItem({ className, children, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>): any;
declare function DropdownMenuLabel({ className, inset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
}): any;
declare function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>): any;
declare function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<'span'>): any;
declare function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>): any;
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): any;
declare function DropdownMenuSubContent({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>): any;

declare function Empty({ className, ...props }: React.ComponentProps<'div'>): any;
declare function EmptyHeader({ className, ...props }: React.ComponentProps<'div'>): any;
declare const emptyMediaVariants: (props?: {
    variant?: "default" | "icon";
} & class_variance_authority_types.ClassProp) => string;
declare function EmptyMedia({ className, variant, ...props }: React.ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants>): any;
declare function EmptyTitle({ className, ...props }: React.ComponentProps<'div'>): any;
declare function EmptyDescription({ className, ...props }: React.ComponentProps<'p'>): any;
declare function EmptyContent({ className, ...props }: React.ComponentProps<'div'>): any;

declare function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>): any;

declare function FieldSet({ className, ...props }: React.ComponentProps<'fieldset'>): any;
declare function FieldLegend({ className, variant, ...props }: React.ComponentProps<'legend'> & {
    variant?: 'legend' | 'label';
}): any;
declare function FieldGroup({ className, ...props }: React.ComponentProps<'div'>): any;
declare const fieldVariants: (props?: {
    orientation?: "horizontal" | "vertical" | "responsive";
} & class_variance_authority_types.ClassProp) => string;
declare function Field({ className, orientation, ...props }: React.ComponentProps<'div'> & VariantProps<typeof fieldVariants>): any;
declare function FieldContent({ className, ...props }: React.ComponentProps<'div'>): any;
declare function FieldLabel({ className, ...props }: React.ComponentProps<typeof Label>): any;
declare function FieldTitle({ className, ...props }: React.ComponentProps<'div'>): any;
declare function FieldDescription({ className, ...props }: React.ComponentProps<'p'>): any;
declare function FieldSeparator({ children, className, ...props }: React.ComponentProps<'div'> & {
    children?: React.ReactNode;
}): any;
declare function FieldError({ className, children, errors, ...props }: React.ComponentProps<'div'> & {
    errors?: Array<{
        message?: string;
    } | undefined>;
}): any;

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => any;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: react_hook_form.FieldError;
    id: any;
    name: any;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare function FormItem({ className, ...props }: React.ComponentProps<'div'>): any;
declare function FormLabel({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>): any;
declare function FormControl({ ...props }: React.ComponentProps<typeof Slot>): any;
declare function FormDescription({ className, ...props }: React.ComponentProps<'p'>): any;
declare function FormMessage({ className, ...props }: React.ComponentProps<'p'>): any;

declare function HoverCard({ ...props }: React.ComponentProps<typeof HoverCardPrimitive.Root>): any;
declare function HoverCardTrigger({ ...props }: React.ComponentProps<typeof HoverCardPrimitive.Trigger>): any;
declare function HoverCardContent({ className, align, sideOffset, ...props }: React.ComponentProps<typeof HoverCardPrimitive.Content>): any;

declare function InputGroup({ className, ...props }: React.ComponentProps<'div'>): any;
declare const inputGroupAddonVariants: (props?: {
    align?: "inline-start" | "inline-end" | "block-start" | "block-end";
} & class_variance_authority_types.ClassProp) => string;
declare function InputGroupAddon({ className, align, ...props }: React.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>): any;
declare const inputGroupButtonVariants: (props?: {
    size?: "sm" | "icon-sm" | "xs" | "icon-xs";
} & class_variance_authority_types.ClassProp) => string;
declare function InputGroupButton({ className, type, variant, size, ...props }: Omit<React.ComponentProps<typeof Button>, 'size'> & VariantProps<typeof inputGroupButtonVariants>): any;
declare function InputGroupText({ className, ...props }: React.ComponentProps<'span'>): any;
declare function InputGroupInput({ className, ...props }: React.ComponentProps<'input'>): any;
declare function InputGroupTextarea({ className, ...props }: React.ComponentProps<'textarea'>): any;

declare function InputOTP({ className, containerClassName, ...props }: React.ComponentProps<typeof OTPInput> & {
    containerClassName?: string;
}): any;
declare function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>): any;
declare function InputOTPSlot({ index, className, ...props }: React.ComponentProps<'div'> & {
    index: number;
}): any;
declare function InputOTPSeparator({ ...props }: React.ComponentProps<'div'>): any;

declare function Input({ className, type, ...props }: React.ComponentProps<'input'>): any;

declare function ItemGroup({ className, ...props }: React.ComponentProps<'div'>): any;
declare function ItemSeparator({ className, ...props }: React.ComponentProps<typeof Separator>): any;
declare const itemVariants: (props?: {
    variant?: "default" | "outline" | "muted";
    size?: "default" | "sm";
} & class_variance_authority_types.ClassProp) => string;
declare function Item({ className, variant, size, asChild, ...props }: React.ComponentProps<'div'> & VariantProps<typeof itemVariants> & {
    asChild?: boolean;
}): any;
declare const itemMediaVariants: (props?: {
    variant?: "default" | "icon" | "image";
} & class_variance_authority_types.ClassProp) => string;
declare function ItemMedia({ className, variant, ...props }: React.ComponentProps<'div'> & VariantProps<typeof itemMediaVariants>): any;
declare function ItemContent({ className, ...props }: React.ComponentProps<'div'>): any;
declare function ItemTitle({ className, ...props }: React.ComponentProps<'div'>): any;
declare function ItemDescription({ className, ...props }: React.ComponentProps<'p'>): any;
declare function ItemActions({ className, ...props }: React.ComponentProps<'div'>): any;
declare function ItemHeader({ className, ...props }: React.ComponentProps<'div'>): any;
declare function ItemFooter({ className, ...props }: React.ComponentProps<'div'>): any;

declare function Kbd({ className, ...props }: React.ComponentProps<'kbd'>): any;
declare function KbdGroup({ className, ...props }: React.ComponentProps<'div'>): any;

declare function Menubar({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Root>): any;
declare function MenubarMenu({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Menu>): any;
declare function MenubarGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Group>): any;
declare function MenubarPortal({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Portal>): any;
declare function MenubarRadioGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>): any;
declare function MenubarTrigger({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Trigger>): any;
declare function MenubarContent({ className, align, alignOffset, sideOffset, ...props }: React.ComponentProps<typeof MenubarPrimitive.Content>): any;
declare function MenubarItem({ className, inset, variant, ...props }: React.ComponentProps<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
}): any;
declare function MenubarCheckboxItem({ className, children, checked, ...props }: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>): any;
declare function MenubarRadioItem({ className, children, ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioItem>): any;
declare function MenubarLabel({ className, inset, ...props }: React.ComponentProps<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
}): any;
declare function MenubarSeparator({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Separator>): any;
declare function MenubarShortcut({ className, ...props }: React.ComponentProps<'span'>): any;
declare function MenubarSub({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Sub>): any;
declare function MenubarSubTrigger({ className, inset, children, ...props }: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
}): any;
declare function MenubarSubContent({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.SubContent>): any;

declare function NavigationMenu({ className, children, viewport, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
    viewport?: boolean;
}): any;
declare function NavigationMenuList({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.List>): any;
declare function NavigationMenuItem({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Item>): any;
declare const navigationMenuTriggerStyle: (props?: class_variance_authority_types.ClassProp) => string;
declare function NavigationMenuTrigger({ className, children, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>): any;
declare function NavigationMenuContent({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Content>): any;
declare function NavigationMenuViewport({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>): any;
declare function NavigationMenuLink({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Link>): any;
declare function NavigationMenuIndicator({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>): any;

declare function Pagination({ className, ...props }: React.ComponentProps<'nav'>): any;
declare function PaginationContent({ className, ...props }: React.ComponentProps<'ul'>): any;
declare function PaginationItem({ ...props }: React.ComponentProps<'li'>): any;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, 'size'> & React.ComponentProps<'a'>;
declare function PaginationLink({ className, isActive, size, ...props }: PaginationLinkProps): any;
declare function PaginationPrevious({ className, ...props }: React.ComponentProps<typeof PaginationLink>): any;
declare function PaginationNext({ className, ...props }: React.ComponentProps<typeof PaginationLink>): any;
declare function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>): any;

declare function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>): any;
declare function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>): any;
declare function PopoverContent({ className, align, sideOffset, ...props }: React.ComponentProps<typeof PopoverPrimitive.Content>): any;
declare function PopoverAnchor({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>): any;

declare function Progress({ className, value, ...props }: React.ComponentProps<typeof ProgressPrimitive.Root>): any;

declare function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>): any;
declare function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>): any;

declare function ResizablePanelGroup({ className, ...props }: React.ComponentProps<typeof Group>): any;
declare function ResizablePanel({ ...props }: React.ComponentProps<typeof Panel>): any;
declare function ResizableHandle({ withHandle, className, ...props }: React.ComponentProps<typeof Separator$1> & {
    withHandle?: boolean;
}): any;

declare function ScrollArea({ className, children, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.Root>): any;
declare function ScrollBar({ className, orientation, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>): any;

declare function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>): any;
declare function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>): any;
declare function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>): any;
declare function SelectTrigger({ className, size, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: 'sm' | 'default';
}): any;
declare function SelectContent({ className, children, position, ...props }: React.ComponentProps<typeof SelectPrimitive.Content>): any;
declare function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>): any;
declare function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>): any;
declare function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>): any;
declare function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>): any;
declare function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>): any;

declare function Sheet({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>): any;
declare function SheetTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>): any;
declare function SheetClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>): any;
declare function SheetContent({ className, children, side, ...props }: React.ComponentProps<typeof DialogPrimitive.Content> & {
    side?: 'top' | 'right' | 'bottom' | 'left';
}): any;
declare function SheetHeader({ className, ...props }: React.ComponentProps<'div'>): any;
declare function SheetFooter({ className, ...props }: React.ComponentProps<'div'>): any;
declare function SheetTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>): any;
declare function SheetDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>): any;

declare function TooltipProvider({ delayDuration, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>): any;
declare function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>): any;
declare function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>): any;
declare function TooltipContent({ className, sideOffset, children, ...props }: React.ComponentProps<typeof TooltipPrimitive.Content>): any;

declare function useSidebar(): any;
declare function SidebarProvider({ defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: React.ComponentProps<'div'> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}): any;
declare function Sidebar({ side, variant, collapsible, className, children, ...props }: React.ComponentProps<'div'> & {
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
}): any;
declare function SidebarTrigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>): any;
declare function SidebarRail({ className, ...props }: React.ComponentProps<'button'>): any;
declare function SidebarInset({ className, ...props }: React.ComponentProps<'main'>): any;
declare function SidebarInput({ className, ...props }: React.ComponentProps<typeof Input>): any;
declare function SidebarHeader({ className, ...props }: React.ComponentProps<'div'>): any;
declare function SidebarFooter({ className, ...props }: React.ComponentProps<'div'>): any;
declare function SidebarSeparator({ className, ...props }: React.ComponentProps<typeof Separator>): any;
declare function SidebarContent({ className, ...props }: React.ComponentProps<'div'>): any;
declare function SidebarGroup({ className, ...props }: React.ComponentProps<'div'>): any;
declare function SidebarGroupLabel({ className, asChild, ...props }: React.ComponentProps<'div'> & {
    asChild?: boolean;
}): any;
declare function SidebarGroupAction({ className, asChild, ...props }: React.ComponentProps<'button'> & {
    asChild?: boolean;
}): any;
declare function SidebarGroupContent({ className, ...props }: React.ComponentProps<'div'>): any;
declare function SidebarMenu({ className, ...props }: React.ComponentProps<'ul'>): any;
declare function SidebarMenuItem({ className, ...props }: React.ComponentProps<'li'>): any;
declare const sidebarMenuButtonVariants: (props?: {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_types.ClassProp) => string;
declare function SidebarMenuButton({ asChild, isActive, variant, size, tooltip, className, ...props }: React.ComponentProps<'button'> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>): any;
declare function SidebarMenuAction({ className, asChild, showOnHover, ...props }: React.ComponentProps<'button'> & {
    asChild?: boolean;
    showOnHover?: boolean;
}): any;
declare function SidebarMenuBadge({ className, ...props }: React.ComponentProps<'div'>): any;
declare function SidebarMenuSkeleton({ className, showIcon, ...props }: React.ComponentProps<'div'> & {
    showIcon?: boolean;
}): any;
declare function SidebarMenuSub({ className, ...props }: React.ComponentProps<'ul'>): any;
declare function SidebarMenuSubItem({ className, ...props }: React.ComponentProps<'li'>): any;
declare function SidebarMenuSubButton({ asChild, size, isActive, className, ...props }: React.ComponentProps<'a'> & {
    asChild?: boolean;
    size?: 'sm' | 'md';
    isActive?: boolean;
}): any;

declare function Skeleton({ className, ...props }: React.ComponentProps<'div'>): any;

declare function Slider({ className, defaultValue, value, min, max, ...props }: React.ComponentProps<typeof SliderPrimitive.Root>): any;

declare const Toaster: ({ ...props }: ToasterProps) => any;

declare function Spinner({ className, ...props }: React.ComponentProps<'svg'>): any;

declare function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>): any;

declare function Table({ className, ...props }: React.ComponentProps<'table'>): any;
declare function TableHeader({ className, ...props }: React.ComponentProps<'thead'>): any;
declare function TableBody({ className, ...props }: React.ComponentProps<'tbody'>): any;
declare function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>): any;
declare function TableRow({ className, ...props }: React.ComponentProps<'tr'>): any;
declare function TableHead({ className, ...props }: React.ComponentProps<'th'>): any;
declare function TableCell({ className, ...props }: React.ComponentProps<'td'>): any;
declare function TableCaption({ className, ...props }: React.ComponentProps<'caption'>): any;

declare function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>): any;
declare function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>): any;
declare function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>): any;
declare function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>): any;

declare function Textarea({ className, ...props }: React.ComponentProps<'textarea'>): any;

declare const ToastProvider: React.FC<ToastPrimitives.ToastProviderProps>;
declare const ToastViewport: any;
declare const Toast$1: any;
declare const ToastAction: any;
declare const ToastClose: any;
declare const ToastTitle: any;
declare const ToastDescription: any;
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast$1>;
type ToastActionElement = React.ReactElement<typeof ToastAction>;

declare const toggleVariants: (props?: {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_types.ClassProp) => string;
declare function Toggle({ className, variant, size, ...props }: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>): any;

declare function ToggleGroup({ className, variant, size, children, ...props }: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>): any;
declare function ToggleGroupItem({ className, children, variant, size, ...props }: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>): any;

declare function useIsMobile(): boolean;

type ToasterToast = ToastProps & {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: ToastActionElement;
};
declare const actionTypes: {
    readonly ADD_TOAST: "ADD_TOAST";
    readonly UPDATE_TOAST: "UPDATE_TOAST";
    readonly DISMISS_TOAST: "DISMISS_TOAST";
    readonly REMOVE_TOAST: "REMOVE_TOAST";
};
type ActionType = typeof actionTypes;
type Action = {
    type: ActionType['ADD_TOAST'];
    toast: ToasterToast;
} | {
    type: ActionType['UPDATE_TOAST'];
    toast: Partial<ToasterToast>;
} | {
    type: ActionType['DISMISS_TOAST'];
    toastId?: ToasterToast['id'];
} | {
    type: ActionType['REMOVE_TOAST'];
    toastId?: ToasterToast['id'];
};
interface State {
    toasts: ToasterToast[];
}
declare const reducer: (state: State, action: Action) => State;
type Toast = Omit<ToasterToast, 'id'>;
declare function toast({ ...props }: Toast): {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
};
declare function useToast(): any;

declare function cn(...inputs: ClassValue[]): string;

type Props = React.PropsWithChildren<ThemeProviderProps>;
declare function ThemeProvider({ children, ...props }: Props): any;

type ProdexyBrandConfig = {
    name?: string;
    logoUrl?: string;
    fontSans?: string;
    fontMono?: string;
    colors?: Partial<Record<'background' | 'foreground' | 'card' | 'cardForeground' | 'popover' | 'popoverForeground' | 'primary' | 'primaryForeground' | 'secondary' | 'secondaryForeground' | 'muted' | 'mutedForeground' | 'accent' | 'accentForeground' | 'destructive' | 'destructiveForeground' | 'border' | 'input' | 'ring' | 'sidebar' | 'sidebarForeground' | 'sidebarPrimary' | 'sidebarPrimaryForeground' | 'sidebarAccent' | 'sidebarAccentForeground' | 'sidebarBorder' | 'sidebarRing', string>>;
};

declare function applyProdexyBrand(config: ProdexyBrandConfig): void;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AspectRatio, Avatar, AvatarFallback, AvatarImage, Badge, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, ButtonGroup, ButtonGroupSeparator, ButtonGroupText, Calendar, CalendarDayButton, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle, Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, HoverCardContent, HoverCardTrigger, Input, InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle, Kbd, KbdGroup, Label, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Popover, PopoverAnchor, PopoverContent, PopoverTrigger, type ProdexyBrandConfig, Progress, RadioGroup, RadioGroupItem, ResizableHandle, ResizablePanel, ResizablePanelGroup, ScrollArea, ScrollBar, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, Skeleton, Slider, Spinner, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, ThemeProvider, Toast$1 as Toast, ToastAction, type ToastActionElement, ToastClose, ToastDescription, type ToastProps, ToastProvider, ToastTitle, ToastViewport, Toaster, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, applyProdexyBrand, badgeVariants, buttonGroupVariants, buttonVariants, cn, navigationMenuTriggerStyle, reducer, toast, toggleVariants, useFormField, useIsMobile, useSidebar, useToast };
