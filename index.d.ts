import { ClassProp } from 'class-variance-authority/types';
import { default as default_2 } from '../../../node_modules/react';
import { IconType } from 'react-icons';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import * as React_2 from 'react';
import { ReactNode } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';

export declare const Button: React_2.ForwardRefExoticComponent<ButtonProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    href?: string;
    target?: string;
    disabled?: boolean;
    Icon?: IconType;
    IconRight?: IconType;
    loading?: boolean;
}

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "colorfulMain" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & ClassProp) | undefined) => string;

/**
 * ImageInfoType 接口定义了图片的信息。
 *
 * @interface ImageInfoType
 * @property {string} [url] - 图片的 URL。
 * @property {string} [alt] - 图片的替代文本。
 * @property {number} [width] - 图片的宽度。
 * @property {number} [height] - 图片的高度。
 */
export declare interface ImageInfoType {
    url?: string;
    alt?: string;
    width?: number;
    height?: number;
}

export declare const ImageUpload: {
    ({ type, imageInfo, params, open, keywords, noGenerateAlt, confirm, onCancel, upload, downloadPhoto, getBlogAlt, queryPhotos }: ImageUploadProps): JSX_2.Element;
    displayName: string;
};

export declare interface ImageUploadProps {
    type?: "upload" | 'unsplash' | "edit";
    imageInfo: ImageInfoType;
    params?: {
        title?: string;
        languageCode?: string;
    };
    open?: boolean;
    keywords?: string[];
    noGenerateAlt?: boolean;
    confirm?: (info: ImageInfoType) => void;
    onCancel?: () => void;
    upload?: (info: {
        fileName: string;
        imageBase64: string;
    }) => Promise<string | undefined>;
    downloadPhoto?: (data: {
        downloadLocation: string;
    }) => Promise<string>;
    getBlogAlt?: (data: {
        title?: string;
        imageUrl?: string;
        languageCode?: string;
        originalAlt?: string | null;
    }) => Promise<string | undefined>;
    queryPhotos?: (data: {
        query: string;
        page: number;
        perPage: number;
    }) => Promise<QueryPhotosResponseType['data']>;
}

export declare const Input: React_2.ForwardRefExoticComponent<InputProps & React_2.RefAttributes<HTMLInputElement>>;

export declare interface InputProps extends React_2.InputHTMLAttributes<HTMLInputElement> {
    clearable?: boolean;
    suffix?: React_2.ReactNode;
}

export declare const Loading: {
    ({ loading, children }: LoadingProps): JSX_2.Element;
    displayName: string;
};

export declare interface LoadingProps {
    loading: boolean;
    children: default_2.ReactNode;
}

export declare const Modal: ({ open, width, children, maskClosable, closable, contentClass, getPopupBody, maskContent, type, title, modal, cancelText, okText, onClose, onOk, footer, buttons, }: ModalProps) => JSX_2.Element;

export declare interface ModalProps {
    /**
     * 控制模态框的显示与隐藏
     * @default false
     */
    open?: boolean;
    /**
     * 模态框的宽度，可以是数值或字符串
     */
    width?: number | string;
    /**
     * 模态框的内容
     */
    children?: ReactNode;
    /**
     * 自定义内容区域的类名
     */
    contentClass?: string;
    /**
     * 模态框的标题内容
     */
    title?: ReactNode;
    /**
     * 是否显示关闭按钮
     * @default true
     */
    closable?: boolean;
    /**
     * 是否获取弹出层的body
     * @default false
     */
    getPopupBody?: boolean;
    /**
     * 模态框的类型，可以是默认类型或市场类型
     * @default "default"
     */
    type?: "default" | "market";
    /**
     * 是否模态显示，即弹出时无法操作其他元素
     * @default true
     */
    modal?: boolean;
    /**
     * 自定义底部内容，仅在type为market时生效
     */
    footer?: ReactNode;
    /**
     * 点击遮罩层是否允许关闭模态框
     * @default true
     */
    maskClosable?: boolean;
    /**
     * 遮罩层的内容
     */
    maskContent?: React.ReactNode;
    /**
     * 是否显示默认的确定和取消按钮
     * @default true
     */
    buttons?: boolean;
    /**
     * 取消按钮的文本，可以是字符串或布尔值，布尔值为false时不显示取消按钮
     */
    cancelText?: string | boolean;
    /**
     * 确定按钮的文本
     */
    okText?: string;
    /**
     * 关闭模态框的回调函数
     */
    onClose?: () => void;
    /**
     * 点击确定按钮的回调函数
     */
    onOk?: () => void;
}

declare interface QueryPhotosResponseType {
    code?: string;
    message?: string;
    success?: boolean;
    attributes?: Record<string, any>;
    /** 返回对象 */
    data?: {
        total: number;
        total_pages: number;
        results: Array<UnsplashImage>;
    };
}

export declare const RichEditor: default_2.MemoExoticComponent<({ apiKey, language, value, readOnly, customUpload, onInit, upload, onChange, ...args }: RichEditorProps) => JSX_2.Element>;

export declare interface RichEditorProps extends UploadProps {
    /**
     * key
     */
    apiKey?: string;
    /**
     * 语言设置
     */
    language?: string;
    /**
     * 是否启用自定义上传
     */
    customUpload?: boolean;
    /**
     * 是否只读
     */
    readOnly?: boolean;
    /**
     * 编辑器的初始内容
     */
    value?: string;
    /**
     * 编辑器初始化完成时的回调函数
     */
    onInit?: () => void;
    /**
     * 上传接口 必填
     */
    upload: Required<ImageUploadProps>["upload"];
    /**
     * 内容变化时的回调函数
     */
    onChange?: (content: string) => void;
}

declare interface UnsplashImage {
    id: string; // 图片的唯一标识符
    slug: string; // 图片的 slug
    alternative_slugs: Record<string, string>; // 图片的不同语言的别名 slug
    created_at: string; // 图片的创建日期
    updated_at: string; // 图片的最近更新时间
    promoted_at: string | null; // 图片的推广日期，如果有的话
    width: number; // 图片的宽度（像素）
    height: number; // 图片的高度（像素）
    color: string; // 图片的主色调（十六进制颜色码）
    blur_hash: string; // 图片的模糊哈希，用于占位符
    description: string | null; // 图片的描述（如果有的话）
    alt_description: string; // 图片的替代描述
    breadcrumbs: any[]; // 面包屑导航（如果有的话）
    urls: {
        // 图片的不同尺寸的 URL
        raw: string; // 原始图片的 URL
        full: string; // 全尺寸图片的 URL
        regular: string; // 常规尺寸图片的 URL
        small: string; // 小尺寸图片的 URL
        thumb: string; // 缩略图的 URL
        small_s3: string; // 小尺寸图片的 S3 URL
    };
    links: {
        // 与图片相关的各种链接
        self: string; // 自引用链接（API 端点）
        html: string; // 图片的 HTML 链接
        download: string; // 图片的下载链接
        downloadLocation: string; // 图片的下载位置（API 端点）
    };
    likes: number; // 图片的点赞数
    liked_by_user: boolean; // 当前用户是否点赞了该图片
    current_user_collections: any[]; // 当前用户的收藏集（如果有的话）
    sponsorship: {
        // 图片的赞助信息（如果有的话）
        // 如果有赞助信息的具体结构，请在此定义
    } | null;
    topic_submissions: Record<string, unknown>; // 图片的主题提交信息
    asset_type: string; // 资源的类型（通常是 "photo"）
    user: {
        // 图片的用户信息
        id: string; // 用户的唯一标识符
        updated_at: string; // 用户信息的最近更新时间
        username: string; // 用户名
        name: string; // 用户的全名
        first_name: string; // 用户的名字
        last_name: string; // 用户的姓氏
        twitter_username: string; // 用户的 Twitter 用户名
        portfolio_url: string; // 用户的作品集 URL
        bio: string; // 用户的简介
        location: string; // 用户的位置
        links: {
            // 与用户相关的各种链接
            self: string; // 自引用链接（API 端点）
            html: string; // 用户的 HTML 链接
            photos: string; // 用户的照片 API 端点
            likes: string; // 用户的点赞 API 端点
            portfolio: string; // 用户的作品集 API 端点
            following: string; // 用户的关注 API 端点
            followers: string; // 用户的粉丝 API 端点
        };
        profile_image: {
            // 用户的头像图片
            small: string; // 小尺寸头像图片的 URL
            medium: string; // 中尺寸头像图片的 URL
            large: string; // 大尺寸头像图片的 URL
        };
        instagram_username: string; // 用户的 Instagram 用户名
        total_collections: number; // 用户的收藏集总数
        total_likes: number; // 用户的点赞总数
        total_photos: number; // 用户的图片总数
        total_promoted_photos: number; // 用户的推广图片总数
        total_illustrations: number; // 用户的插图总数
        total_promoted_illustrations: number; // 用户的推广插图总数
        accepted_tos: boolean; // 用户是否接受了服务条款
        for_hire: boolean; // 用户是否可被雇佣
        social: {
            // 用户的社交信息
            instagram_username: string; // 用户的 Instagram 用户名
            portfolio_url: string; // 用户的作品集 URL
            twitter_username: string; // 用户的 Twitter 用户名
            paypal_email: string | null; // 用户的 PayPal 邮箱（如果有的话）
        };
    };
}

declare interface UploadProps {
    /**
     * 上传图片的关键字 当使用自定义上传时此字段必填
     */
    keywords?: string[];
    /**
     * 获取图片alt接口 当使用自定义上传时此字段必填
     */
    getBlogAlt?: ImageUploadProps["getBlogAlt"];
    /**
     * 图搜接口 当使用自定义上传时此字段必填
     */
    queryPhotos?: ImageUploadProps["queryPhotos"];
    /**
     * 图片上传函数将downloadLocation 转成需要的图片的url
     */
    downloadPhoto?: (data: {
        downloadLocation: string;
    }) => Promise<string>;
}

export { }
